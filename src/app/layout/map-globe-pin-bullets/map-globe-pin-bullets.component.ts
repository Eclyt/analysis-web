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
@Component({
    selector: 'app-map-globe-pin-bullets',
    templateUrl: './map-globe-pin-bullets.component.html',
    styleUrls: ['./map-globe-pin-bullets.component.scss']
})
export class MapGlobePinBulletsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.pinBullet()
    }


    pinBullet() {
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
                projection: am5map.geoEquirectangular()
            })
        );


        // let chart = root.container.children.push(am5map.MapChart.new(root, {
        //     panX: "rotateX",
        //     panY: "rotateY",
        //     projection: am5map.geoOrthographic()
        // }));

        map.set("zoomControl", am5map.ZoomControl.new(root, {
            background: am5.Rectangle.new(root, {
                // fill: am5.color(0xeb354e),               
                fillOpacity: 0.9,
                strokeOpacity:0
            })
        }));
        // Create polygon series
        let polygonSeries = map.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_continentsLow,
                exclude: ["antarctica"],
                fill: am5.color(0xeb354e),
                stroke: am5.color(0xf38493)
                // fill: am5.color(0xbbbbbb)
            })
        );

        let pointSeries = map.series.push(
            am5map.MapPointSeries.new(root, {})
        );

        let colorSet = am5.ColorSet.new(root, { step: 2 });
            
        pointSeries.bullets.push(function (root, series, dataItem:any) {
            let value = dataItem.dataContext.value;

            let container = am5.Container.new(root, {});
            let color = colorSet.next();
            let radius = 15 + value / 20 * 20;
            let circle = container.children.push(am5.Circle.new(root, {
                radius: radius,
                fill: color,
                dy: -radius * 2
            }))

            let pole = container.children.push(am5.Line.new(root, {
                stroke: color,
                height: -40,
                strokeGradient: am5.LinearGradient.new(root, {
                    stops: [
                        { opacity: 1 },
                        { opacity: 1 },
                        { opacity: 0 }
                    ]
                })
            }));

            let label = container.children.push(am5.Label.new(root, {
                text: value + "%",
                fill: am5.color(0xffffff),
                fontWeight: "400",
                centerX: am5.p50,
                centerY: am5.p50,
                dy: -radius * 2
            }))

            let titleLabel = container.children.push(am5.Label.new(root, {
                text: dataItem.dataContext.title,
                fill: color,
                fontWeight: "500",
                fontSize: "1em",
                centerY: am5.p50,
                dy: -radius * 2,
                dx: radius
            }))

            return am5.Bullet.new(root, {
                sprite: container
            });
        });




        // ====================================
        // Create pins
        // ====================================

        let data = [{
            "title": "United States",
            "latitude": 39.563353,
            "longitude": -99.316406,
            "width": 100,
            "height": 100,
            "value": 12
        }, {
            "title": "European Union",
            "latitude": 50.896104,
            "longitude": 19.160156,
            "width": 50,
            "height": 50,
            "value": 15
        }, {
            "title": "Asia",
            "latitude": 47.212106,
            "longitude": 103.183594,
            "width": 80,
            "height": 80,
            "value": 8
        }, {
            "title": "Africa",
            "latitude": 11.081385,
            "longitude": 21.621094,
            "width": 50,
            "height": 50,
            "value": 5
        }];

        for (var i = 0; i < data.length; i++) {
            let d = data[i];
            pointSeries.data.push({
                geometry: { type: "Point", coordinates: [d.longitude, d.latitude] },
                title: d.title,
                value: d.value
            });
        }
    }
}
