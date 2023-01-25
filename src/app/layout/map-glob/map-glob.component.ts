// import { Component, OnInit } from '@angular/core';
// tslint:disable: quotemark
import { Component, NgZone, AfterViewInit, OnDestroy, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_material from '@amcharts/amcharts5/themes/Material';
import * as am5map from "@amcharts/amcharts5/map";
import { Location } from "@angular/common";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import { ApiService } from "src/app/service/api.service";
import am5geodata_region_usa_congressional2022_worldLow from "@amcharts/amcharts5-geodata/region/usa/congressional2022/flLow";



@Component({
    selector: 'app-map-glob',
    templateUrl: './map-glob.component.html',
    styleUrls: ['./map-glob.component.scss']
})
export class MapGlobComponent implements OnInit {
    tempData: any;
    caseData: any;
    // private mapChart: am5map.MapChart;
    constructor(private api: ApiService, private zone: NgZone) { }

    data = [
        {
            name: 'Monica',
            steps: 45688,
            pictureSettings: {
                src: 'https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg',
            },
        },
        {
            name: 'Joey',
            steps: 35781,
            pictureSettings: {
                src: 'https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg',
            },
        },
        {
            name: 'Ross',
            steps: 25464,
            pictureSettings: {
                src: 'https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg',
            },
        },
        {
            name: 'Phoebe',
            steps: 18788,
            pictureSettings: {
                src: 'https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg',
            },
        },
        {
            name: 'Rachel',
            steps: 15465,
            pictureSettings: {
                src: 'https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg',
            },
        },
        {
            name: 'Chandler',
            steps: 11561,
            pictureSettings: {
                src: 'https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg',
            },
        },
    ];
    ngOnInit() {
        this.initMap(); // On initialise
        this.initBarY();
        this.initBarX();
    }

    initMap(){
        let root = am5.Root.new('chartdivmap');
        root.setThemes([am5themes_Animated.new(root)]);
        let chart = root.container.children.push(
            am5map.MapChart.new(root, {
                projection: am5map.geoOrthographic(),
                panX: "rotateX",
                wheelY: "zoom",
                wheelX: "zoom",
                minZoomLevel: 0.5,
                maxZoomLevel: 16,
                
                
            })
        );

        let polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                fill: am5.color(0xeb354e),
                stroke: am5.color(0xf38493)

            })
        );
       
        

        polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}"
        });
        
        chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

        // polygonSeries.mapPolygons.template.states.create("hover").setAll({
        //   fill: am5.color(0x6779356)
        // })

        var backgroundSeries = chart.series.unshift(
        am5map.MapPolygonSeries.new(root, {})
        );

        backgroundSeries.mapPolygons.template.setAll({
            fill: am5.color(0xf38493),
            stroke: am5.color(0xf38493 ),
            
        });

        backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180)
        });
       
    }

    initBarY() {
        let root = am5.Root.new('chartdiv1');

        root.setThemes([am5themes_Animated.new(root)]);

        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: 'none',
                wheelY: 'none',
                paddingLeft: 50,
                paddingRight: 40,
            })
        );

        // Create Axes

        let yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.grid.template.set('visible', false);

        let yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: 'name',
                renderer: yRenderer,
                paddingRight: 40,
            })
        );

        let xRenderer = am5xy.AxisRendererX.new(root, {});
        xRenderer.grid.template.set('strokeDasharray', [3]);

        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                min: 0,
                renderer: xRenderer,
            })
        );

        // End Create Axes

        // Adding Series

        let series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: 'Income',
                xAxis: xAxis,
                yAxis: yAxis,
                valueXField: 'steps',
                categoryYField: 'name',
                sequencedInterpolation: true,
                calculateAggregates: true,
                maskBullets: false,
                tooltip: am5.Tooltip.new(root, {
                    dy: -30,
                    pointerOrientation: 'vertical',
                    labelText: '{valueX}',
                }),
            })
        );

        series.columns.template.setAll({
            strokeOpacity: 0,
            cornerRadiusBR: 10,
            cornerRadiusTR: 10,
            cornerRadiusBL: 10,
            cornerRadiusTL: 10,
            maxHeight: 40,
            fillOpacity: 0.8,
        });

        let currentlyHovered:any;

        series.columns.template.events.on('pointerover', function (e) {
            handleHover(e.target.dataItem);
        });

        series.columns.template.events.on('pointerout', function (e) {
            handleOut();
        });

        // End Series Add

        function handleHover(dataItem:any) {
            if (dataItem && currentlyHovered != dataItem) {
                handleOut();
                currentlyHovered = dataItem;
                let bullet = dataItem.bullets[0];
                bullet.animate({
                    key: 'locationX',
                    to: 1,
                    duration: 600,
                    easing: am5.ease.out(am5.ease.cubic),
                });
            }
        }

        function handleOut() {
            if (currentlyHovered) {
                let bullet = currentlyHovered.bullets[0];
                bullet.animate({
                    key: 'locationX',
                    to: 0,
                    duration: 600,
                    easing: am5.ease.out(am5.ease.cubic),
                });
            }
        }


        let circleTemplate: any = am5.Template.new({});

        series.bullets.push(function (root, series, dataItem) {
            let bulletContainer = am5.Container.new(root, {});


            let circle = bulletContainer.children.push(
                am5.Circle.new(
                    root,
                    {
                        radius: 34,
                    },
                    circleTemplate
                )
            );

            let maskCircle = bulletContainer.children.push(
                am5.Circle.new(root, { radius: 27 })
            );

            // only containers can be masked, so we add image to another container
            let imageContainer = bulletContainer.children.push(
                am5.Container.new(root, {
                    mask: maskCircle,
                })
            );

            // not working
            let image = imageContainer.children.push(
                am5.Picture.new(root, {
                    templateField: 'pictureSettings',
                    centerX: am5.p50,
                    centerY: am5.p50,
                    width: 60,
                    height: 60,
                })
            );

            return am5.Bullet.new(root, {
                locationX: 0,
                sprite: bulletContainer,
            });
        });

        // heatrule
        series.set('heatRules', [
            {
                dataField: 'valueX',
                min: am5.color(0xf7adb7),
                max: am5.color(0xeb354e),
                target: series.columns.template,
                key: 'fill',
            },
            {
                dataField: 'valueX',
                min: am5.color(0xf7adb7),
                max: am5.color(0xeb354e),
                target: circleTemplate,
                key: 'fill',
            },
        ]);

        series.data.setAll(this.data);
        yAxis.data.setAll(this.data);

        let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
        cursor.lineX.set('visible', false);
        cursor.lineY.set('visible', false);

        cursor.events.on('cursormoved', function () {
            let dataItem = series.get('tooltip')?.dataItem;
            // let dataItem = null
            if (dataItem) {
                handleHover(dataItem);
            } else {
                handleOut();
            }
        });

        // Make stuff animate on load
        series.appear();
        chart.appear(1000, 100);
    }


    initBarX(){
        let root = am5.Root.new("chartdiv2");
    
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        let chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            paddingBottom: 50,
            paddingTop: 40
          })
        );
    
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    
        let xRenderer = am5xy.AxisRendererX.new(root, {});
        xRenderer.grid.template.set("visible", false);
    
        let xAxis = chart.xAxes.push(
          am5xy.CategoryAxis.new(root, {
            paddingTop:40,
            categoryField: "name",
            renderer: xRenderer
          })
        );
    
    
        let yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.grid.template.set("strokeDasharray", [3]);
    
        let yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(root, {
            min: 0,
            renderer: yRenderer
          })
        );
    
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: "Income",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "steps",
            categoryXField: "name",
            sequencedInterpolation: true,
            calculateAggregates: true,
            maskBullets: false,
            tooltip: am5.Tooltip.new(root, {
              dy: -30,
              pointerOrientation: "vertical",
              labelText: "{valueY}"
            })
          })
        );
    
        series.columns.template.setAll({
          strokeOpacity: 0,
          cornerRadiusBR: 10,
          cornerRadiusTR: 10,
          cornerRadiusBL: 10,
          cornerRadiusTL: 10,
          maxWidth: 50,
          fillOpacity: 0.8
        });
    
        let currentlyHovered:any;
    
        series.columns.template.events.on("pointerover", function (e) {
          handleHover(e.target.dataItem);
        });
    
        series.columns.template.events.on("pointerout", function (e) {
          handleOut();
        });
    
        function handleHover(dataItem:any) {
          if (dataItem && currentlyHovered != dataItem) {
            handleOut();
            currentlyHovered = dataItem;
            let bullet = dataItem.bullets[0];
            bullet.animate({
              key: "locationY",
              to: 1,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
    
        function handleOut() {
          if (currentlyHovered) {
            let bullet = currentlyHovered.bullets[0];
            bullet.animate({
              key: "locationY",
              to: 0,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
    
        let circleTemplate:any = am5.Template.new({});
    
        series.bullets.push(function (root, series, dataItem) {
          let bulletContainer = am5.Container.new(root, {});
          let circle = bulletContainer.children.push(
            am5.Circle.new(
              root,
              {
                radius: 34
              },
              circleTemplate
            )
          );
    
          let maskCircle = bulletContainer.children.push(
            am5.Circle.new(root, { radius: 27 })
          );
    
          // only containers can be masked, so we add image to another container
          let imageContainer = bulletContainer.children.push(
            am5.Container.new(root, {
              mask: maskCircle
            })
          );
    
          let image = imageContainer.children.push(
            am5.Picture.new(root, {
              templateField: "pictureSettings",
              centerX: am5.p50,
              centerY: am5.p50,
              width: 60,
              height: 60
            })
          );
    
          return am5.Bullet.new(root, {
            locationY: 0,
            sprite: bulletContainer
          });
        });
    
        // heatrule
        series.set("heatRules", [
          {
            dataField: "valueY",
            min: am5.color(0xf7adb7),
            max: am5.color(0xeb354e),
            target: series.columns.template,
            key: "fill"
          },
          {
            dataField: "valueY",
            min: am5.color(0xf7adb7),
            max: am5.color(0xeb354e),
            target: circleTemplate,
            key: "fill"
          }
        ]);
    
        series.data.setAll(this.data);
        xAxis.data.setAll(this.data);
    
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineX.set("visible", false);
        cursor.lineY.set("visible", false);
    
        cursor.events.on("cursormoved", function () {
          let dataItem = series.get("tooltip")?.dataItem;
        //   let dataItem = null;
          if (dataItem) {
            handleHover(dataItem);
          } else {
            handleOut();
          }
        });
    
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear();
        chart.appear(1000, 100);
    }


}
