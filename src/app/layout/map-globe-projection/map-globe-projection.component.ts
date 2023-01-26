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
import am4geodata_data_countries from "@amcharts/amcharts4-geodata/data/countries2";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5geodata_data_countries from "@amcharts/amcharts5-geodata/data/countries";
import am5geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2";
@Component({
    selector: 'app-map-globe-projection',
    templateUrl: './map-globe-projection.component.html',
    styleUrls: ['./map-globe-projection.component.scss']
})
export class MapGlobeProjectionComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.mapProjection()
    }
    mapProjection() {
        let root = am5.Root.new("chartdiv");
        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                panY: "none",
                projection: am5map.geoNaturalEarth1()
            })
        );

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create polygon series
        let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow
            })
        );

        let graticuleSeries = chart.series.insertIndex(
            0, am5map.GraticuleSeries.new(root, {})
        );

        graticuleSeries.mapLines.template.setAll({
            stroke: am5.color(0x000000),
            strokeOpacity: 0.1
        });

        let backgroundSeries = chart.series.unshift(
            am5map.MapPolygonSeries.new(root, {})
        );

        backgroundSeries.mapPolygons.template.setAll({
            fill: am5.color(0xedf7fa),
            stroke: am5.color(0xedf7fa),
        });

        backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180)
        });

        // Add projection buttons
        let buttons = chart.children.push(am5.Container.new(root, {
            x: am5.p50,
            centerX: am5.p50,
            y: am5.p100,
            dy: -10,
            centerY: am5.p100,
            layout: root.horizontalLayout,
            paddingTop: 5,
            paddingRight: 8,
            paddingBottom: 5,
            paddingLeft: 8,
            background: am5.RoundedRectangle.new(root, {
                fill: am5.color(0xffffff),
                fillOpacity: 0.3
            })
        }));

        function createButton(text:any, projection:any) {
            let button = buttons.children.push(am5.Button.new(root, {
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                marginLeft: 5,
                marginRight: 5,
                label: am5.Label.new(root, {
                    text: text,
                })
            }));

            button.events.on("click", function () {
                chart.set("projection", projection);
            });
        }

        createButton("geoEqualEarth", am5map.geoEqualEarth());
        createButton("geoEquirectangular", am5map.geoEquirectangular());
        createButton("geoMercator", am5map.geoMercator());
        createButton("geoNaturalEarth1", am5map.geoNaturalEarth1());
        createButton("geoOrthographic", am5map.geoOrthographic());

    }
}
