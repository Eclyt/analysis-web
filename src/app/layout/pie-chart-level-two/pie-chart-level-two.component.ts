import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from '@amcharts/amcharts5/percent';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_material from '@amcharts/amcharts5/themes/Material';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5geodata_worldTimeZonesLow from '@amcharts/amcharts5-geodata/worldTimeZonesLow';
import am5geodata_worldTimeZoneAreasLow from '@amcharts/amcharts5-geodata/worldTimeZoneAreasLow';
@Component({
    selector: 'app-pie-chart-level-two',
    templateUrl: './pie-chart-level-two.component.html',
    styleUrls: ['./pie-chart-level-two.component.scss'],
})
export class PieChartLevelTwoComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        this.pieChartLevel();
    }

    pieChartLevel() {
        let root = am5.Root.new("chartdiv");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalLayout
            })
        );


        let series0 = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                alignLabels: false,
                radius: am5.percent(100),
                innerRadius: am5.percent(80)
            })
        );

        series0.states.create("hidden", {
            startAngle: 180,
            endAngle: 180
        });

        series0.slices.template.setAll({
            fill: am5.color(0xeb354e),
            fillOpacity: 0.5,
            strokeOpacity: 0,
            templateField: "settings"
        });

        series0.slices.template.states.create("hover", { scale: 1 });
        series0.slices.template.states.create("active", { shiftRadius: 0 });

        series0.labels.template.setAll({
            templateField: "settings"
        });

        series0.ticks.template.setAll({
            templateField: "settings"
        });

        series0.labels.template.setAll({
            textType: "circular",
            radius: 30
        });

    
        series0.data.setAll([
            {
                category: "First + Second",
                value: 60
            },
            {
                category: "Unused",
                value: 30,
                settings: { forceHidden: true }
            }
        ]);


        let series1 = chart.series.push(
            am5percent.PieSeries.new(root, {
                radius: am5.percent(95),
                innerRadius: am5.percent(85),
                valueField: "value",
                categoryField: "category",
                alignLabels: false
            })
        );

        series1.states.create("hidden", {
            startAngle: 180,
            endAngle: 180
        });

        series1.slices.template.setAll({
            templateField: "sliceSettings",
            strokeOpacity: 0
        });

        series1.labels.template.setAll({
            textType: "circular"
        });

        series1.labels.template.adapters.add("radius", function (radius, target) {
            let dataItem:any = target.dataItem;
            let slice:any = dataItem.get("slice");
            return -(slice.get("radius") - slice.get("innerRadius")) / 2 - 10;
        });

        series1.slices.template.states.create("hover", { scale: 1 });
        series1.slices.template.states.create("active", { shiftRadius: 0 });

        series1.ticks.template.setAll({
            forceHidden: true
        });

        
        series1.data.setAll([{
            category: "First",
            value: 30,
            sliceSettings: { fill: am5.color(0xf38493) }
        }, {
            category: "Second",
            value: 30,
            sliceSettings: { fill: am5.color(0xf7adb7) }
        }, {
            category: "Remaining",
            value: 30,
            sliceSettings: { fill: am5.color(0xeb354e) }
        }]);

    }
}
