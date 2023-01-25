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
@Component({
    selector: 'app-world-time-zone',
    templateUrl: './world-time-zone.component.html',
    styleUrls: ['./world-time-zone.component.scss']
})
export class WorldTimeZoneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.worldTimeZone();
    }

    worldTimeZone() {
        let root = am5.Root.new("chartdiv");

  
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        
        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "translateX",
                panY: "translateY",
                projection: am5map.geoEquirectangular()
            })
        );

        let colorSet = am5.ColorSet.new(root, {});


        let areaSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldTimeZoneAreasLow
            })
        );

        let areaPolygonTemplate = areaSeries.mapPolygons.template;
        areaPolygonTemplate.setAll({ fillOpacity: 0.6 });
        areaPolygonTemplate.adapters.add("fill", function (fill, target) {
            return am5.Color.saturate(
                colorSet.getIndex(areaSeries.mapPolygons.indexOf(target)),
                0.5
            );
        });

        areaPolygonTemplate.states.create("hover", { fillOpacity: 0.8 });


        let zoneSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldTimeZonesLow
            })
        );

        zoneSeries.mapPolygons.template.setAll({
            fill: am5.color(0xeb354e),
            fillOpacity: 0.08
        });

        let zonePolygonTemplate = zoneSeries.mapPolygons.template;
        zonePolygonTemplate.setAll({ interactive: true, tooltipText: "{id}" });
        zonePolygonTemplate.states.create("hover", { fillOpacity: 0.3 });

        // labels
        let labelSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
        labelSeries.bullets.push(() => {
            return am5.Bullet.new(root, {
                sprite: am5.Label.new(root, {
                    text: "{id}",
                    populateText: true,
                    centerX: am5.p50,
                    centerY: am5.p50,
                    fontSize: "0.7em"
                })
            });
        });

        // create labels for each zone
        zoneSeries.events.on("datavalidated", () => {
            am5.array.each(zoneSeries.dataItems, (dataItem) => {
                let centroid = dataItem.get("mapPolygon").visualCentroid();
                labelSeries.pushDataItem({
                    id: dataItem.get("id"),
                    geometry: {
                        type: "Point",
                        coordinates: [centroid.longitude, centroid.latitude]
                    }
                });
            });
        });


        chart.set("zoomControl", am5map.ZoomControl.new(root, {
            background: am5.Rectangle.new(root, {
                // fill: am5.color(0xeb354e),               
                fillOpacity: 0.9,
                strokeOpacity:0
            })
        }));
        

        // Add labels and controls
        let cont = chart.children.push(
            am5.Container.new(root, {
                layout: root.horizontalLayout,
                x: 20,
                y: 40
            })
        );

        cont.children.push(
            am5.Label.new(root, {
                centerY: am5.p50,
                text: "Map"
            })
        );

        let switchButton = cont.children.push(
            am5.Button.new(root, {
                themeTags: ["switch"],
                centerY: am5.p50,
                icon: am5.Circle.new(root, {
                    themeTags: ["icon"]
                })
            })
        );

        switchButton.on("active", function () {
            if (!switchButton.get("active")) {
                chart.set("projection", am5map.geoEquirectangular());
                chart.set("panX", "translateX");
                chart.set("panY", "translateY");
            } else {
                chart.set("projection", am5map.geoOrthographic());
                chart.set("panX", "rotateX");
                chart.set("panY", "rotateY");
            }
        });

        cont.children.push(
            am5.Label.new(root, {
                centerY: am5.p50,
                text: "Globe"
            })
        );
        // Make stuff animate on load
        chart.appear(1000, 100);


    }
}
