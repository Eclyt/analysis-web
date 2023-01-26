import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ApiService } from "src/app/service/api.service";
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from "@amcharts/amcharts5/percent";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_material from '@amcharts/amcharts5/themes/Material';
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_worldTimeZonesLow from "@amcharts/amcharts5-geodata/worldTimeZonesLow";
import am5geodata_worldTimeZoneAreasLow from "@amcharts/amcharts5-geodata/worldTimeZoneAreasLow";
import am5geodata_continentsLow from "@amcharts/amcharts5-geodata/worldTimeZoneAreasLow";
import am4geodata_data_countries from "@amcharts/amcharts4-geodata/data/countries2";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5geodata_data_countries from "@amcharts/amcharts5-geodata/data/countries";
import am5geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
@Component({
    selector: 'app-map-globe-pie-charts',
    templateUrl: './map-globe-pie-charts.component.html',
    styleUrls: ['./map-globe-pie-charts.component.scss']
})
export class MapGlobePieChartsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.mapPieChart();
    }

    mapPieChart() {
        /* Chart code */
        // Create root and chart
        let root = am5.Root.new("chartdiv");

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // ====================================
        // Create map
        // ====================================

        let map = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "none",
                projection: am5map.geoNaturalEarth1()
            })
        );

        // Create polygon series
        let polygonSeries = map.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_continentsLow,
                exclude: ["antarctica"],
                fill: am5.color(0xbbbbbb)
            })
        );

        let pointSeries = map.series.push(
            am5map.MapPointSeries.new(root, {
                // ...
            })
        );

        pointSeries.bullets.push(function (root,   x:any) {

            let chartData = x.dataContext.data;
            // let chartData ={
            //     width:50,
            //     height:50,
            // };


            let chart = root.container.children.push(am5percent.PieChart.new(root, {
                width: chartData.width,
                height: chartData.height,
                radius: am5.p100,
                centerX: am5.p50,
                centerY: am5.p50
            }));

            let series = chart.series.push(am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category"
            }));

            series.labels.template.set("forceHidden", true);
            series.ticks.template.set("forceHidden", true);
            series.data.setAll(chartData.pieData);

            return am5.Bullet.new(root, {
                sprite: chart
            });
        });

        pointSeries.bullets.push(function (root, series, x:any) {

            let chartData = x.dataContext.data;

            return am5.Bullet.new(root, {
                sprite: am5.Label.new(root, {
                    text: chartData.title,
                    centerX: am5.p50,
                    centerY: am5.p100,
                    dy: chartData.height * -0.5
                })
            });
        });


        // ====================================
        // Create pie charts
        // ====================================

        let charts = [{
            "title": "North America",
            "latitude": 39.563353,
            "longitude": -99.316406,
            "width": 100,
            "height": 100,
            "pieData": [{
                "category": "Category #1",
                "value": 1200
            }, {
                "category": "Category #2",
                "value": 500
            }, {
                "category": "Category #3",
                "value": 765
            }, {
                "category": "Category #4",
                "value": 260
            }]
        }, {
            "title": "Europe",
            "latitude": 50.896104,
            "longitude": 19.160156,
            "width": 50,
            "height": 50,
            "pieData": [{
                "category": "Category #1",
                "value": 200
            }, {
                "category": "Category #2",
                "value": 600
            }, {
                "category": "Category #3",
                "value": 350
            }]
        }, {
            "title": "Asia",
            "latitude": 47.212106,
            "longitude": 103.183594,
            "width": 80,
            "height": 80,
            "pieData": [{
                "category": "Category #1",
                "value": 352
            }, {
                "category": "Category #2",
                "value": 266
            }, {
                "category": "Category #3",
                "value": 512
            }, {
                "category": "Category #4",
                "value": 199
            }]
        }, {
            "title": "Africa",
            "latitude": 11.081385,
            "longitude": 21.621094,
            "width": 50,
            "height": 50,
            "pieData": [{
                "category": "Category #1",
                "value": 200
            }, {
                "category": "Category #2",
                "value": 300
            }, {
                "category": "Category #3",
                "value": 599
            }, {
                "category": "Category #4",
                "value": 512
            }]
        }];

        for (var i = 0; i < charts.length; i++) {
            let chart = charts[i];
            pointSeries.data.push({
                geometry: { type: "Point", coordinates: [chart.longitude, chart.latitude] },
                title: chart.title,
                data: chart
            });
        }


    }
}
