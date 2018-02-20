import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-vehicle-prep',
  templateUrl: './vehicle-prep.component.html',
  styleUrls: ['./vehicle-prep.component.css']
})
export class VehiclePrepComponent implements OnInit {
  panelOpenState: boolean = false;
  toggle:boolean=false;
  MvaNumber:string='44762894';
  valuexyz:string="$600";
  valueabc:string="$300";
 
  // to be removed -->
  	
x1	: String = null;
x2	: String = null;
x12	: String = null;
x3	: String = null;
x4	: String = null;
x5	: String = null;
x6	: String = null;
x7	: String = null;
x8	: String = null;
x9	: String = null;
x11	: String = null;
x13	: String = null;
x14	: String = null;
x15	: String = null;
x16	: String = null;
x17	: String = null;
x18	: String = null;
x19	: String = null;
x20	: String = null;
x21	: String = null;
x22	: String = null;
x23	: String = null;
x24	: String = null;
x25	: String = null;
x26	: String = null;
x27	: String = null;
x28	: String = null;
x29	: String = null;
x30	: String = null;
x31	: String = null;
x32	: String = null;
x33	: String = null;
x34	: String = null;
x35	: String = null;
x36	: String = null;
x37	: String = null;
x38	: String = null;
x40	: String = null;
RSF1	: String = null;
RSF2	: String = null;
RSF3	: String = null;
RSF4	: String = null;
RSF5	: String = null;
RSF6	: String = null;
RSF7	: String = null;
RSF8	: String = null;
RSF9	: String = null;
RSF10	: String = null;
RSF11	: String = null;
RSF12	: String = null;
FE1	: String = null;
FE2	: String = null;
FE3	: String = null;
FE4	: String = null;
FE5	: String = null;
LF1	: String = null;
LF2	: String = null;
LF3	: String = null;
LF4	: String = null;
LF5	: String = null;
LF6	: String = null;
LF7	: String = null;
LF8	: String = null;
LF9	: String = null;
LF10	: String = null;
LF11	: String = null;
	
  //////////////////////////////////////////

  constructor(private loc:Location,public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  backClicked()
  {
    this.loc.back();
  }
  logout() {
    
    this.openSnackBar("Session Over","Logged Out");
  }
  openSnackBar(message: string, action: string){
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

  Itype = [
    {value: 'TB', viewValue: 'Turnback'},
    {value: 'WS', viewValue: 'Wholesale'},
    {value: 'UTD', viewValue: 'Ultimate Test Drive'}
  ];


  Wheels = [
    {value: 'ALY', viewValue: 'Alloy'},
    {value: 'STL', viewValue: 'Steel'},
  ];


  Interior = [
    {value: 'CLT', viewValue: 'Cloth'},
    {value: 'VIN', viewValue: 'Vinyl'},
    {value: 'LTH', viewValue: 'Leather'}
  ];

  PCity = [
    {value: 'MCO', viewValue: 'MCO'},
    {value: 'EWR', viewValue: 'EWR'}
  ];


  // Door seat Cockpit 
  DType = [
    {value: 'Dent', viewValue: 'Dent'},
    {value: 'Scratch', viewValue: 'Scratch'},
    {value: 'Crease', viewValue: 'Crease'},
    {value: 'Gouge', viewValue: 'Gouge'},
    {value: 'Tear', viewValue: 'Tear'},
    {value: 'Chip', viewValue: 'Chip'},
  ];

  SType = [
    {value: '<1', viewValue: '<1'},
    {value: '1-4', viewValue: '1-4'},
    {value: '4-8', viewValue: '4-8'},
    {value: '>8', viewValue: '>8'}
  ];

  D2Type = [
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Inoperative', viewValue: 'Inoperative'}
  ];

  D3Type = [
    {value: 'Cut', viewValue: 'Cut'},
    {value: 'Torn', viewValue: 'Torn'},
    {value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"'},
    {value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"'}
  ];

  D4Type = [
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  D5Type = [
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  D6Type = [
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  D7Type = [
    {value: 'Cut', viewValue: 'Cut'},
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  D8Type = [
    {value: 'Loose', viewValue: 'loose'},
    {value: 'Cut', viewValue: 'Cut'},
    {value: 'Torn', viewValue: 'Torn'},
    {value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"'},
    {value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"'}
  ];

  D9Type = [
    {value: 'Loose', viewValue: 'loose'},
    {value: 'Cut', viewValue: 'Cut'},
    {value: 'Torn', viewValue: 'Torn'},
    {value: 'Burn < 1/4"', viewValue: 'Burn < 1/4"'},
    {value: 'Burn > 1/4"', viewValue: 'Burn > 1/4"'}
  ];

  D10Type = [
    {value: 'E', viewValue: 'E'},
    {value: '1/8', viewValue: '1/8'},
    {value: '1/4', viewValue: '1/4'},
    {value: '3/8', viewValue: '3/8'},
    {value: '1/2', viewValue: '1/2'},
    {value: '5/8', viewValue: '5/8'},
    {value: '3/4', viewValue: '3/4'},
    {value: '7/8', viewValue: '7/8'},
    {value: 'F', viewValue: 'F'},

  ];
  
  DT12Type = [
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];
  // Left Rear 
  lftRearDT1 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'chip',viewValue:'chip'}
  ];

  lftRearDS1 = [
    {value:'< 1"',viewValue:'< 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:' >8"'}
  ];

  lftRearDT3 = [
    {value:'Scratch"',viewValue:'Scratch'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Aftermarket',viewValue:'Aftermarket'},
    {value:'Molding damage',viewValue:'Molding damage'}
  ];
  
  lftRearDT4 = [
    {value:'Cut',viewValue:'Cut'},
    {value:'Torn',viewValue:'Torn'},
    {value:'Burn < 1/4"',viewValue:'Burn < 1/4"'},
    {value:'Burn > 1/4"',viewValue:'Burn > 1/4"'}
  ];
  
  lftRearDT5 = [
    {value:'Loose',viewValue:'Loose'},
    {value:'Cut',viewValue:'Cut'},
    {value:'Torn',viewValue:'Torn'},
    {value:'Burn < 1/4"',viewValue:'Burn < 1/4"'},
    {value:'Burn > 1/4"',viewValue:'Burn > 1/4"'}
  ];
 
  lftRearDT6 = [
    {value:'Cut',viewValue:'Cut'},
    {value:'Broken',viewValue:'Broken'},
    {value:'Inoperative',viewValue:'Inoperative'},
    {value:'Missing',viewValue:'Missing'}
  ];

  lftRearDT7 = [
  {value:'Scratch',viewValue:'Scratch'},
  {value:'Gouge',viewValue:'Gouge'},
  {value:'Bent',viewValue:'Bent'}
  ];

  lftRearDS2 = [
  {value:'< 2"',viewValue:' < 2"'},
  {value:'2-4"',viewValue:'2-4"'},
  {value:'4-8"',viewValue:'4-8"'},
  {value:'>8"',viewValue:'>8"'}
  ];

  lftRearDT8 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'chip',viewValue:'chip'}
  ];

  lftRearDS3 = [
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
   ];

  lftRearDT9 = [
    {value:'Cut',viewValue:'Cut'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Puncture',viewValue:'Puncture'},
    {value:'Buldge',viewValue:'Buldge'},
    {value:'Wear Pattern',viewValue:'Wear Pattern'}
   ];

   X1Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
   ];


   X2Type = [
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
   ];

   X3Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
   ];

   X4Type = [
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
     ];

   X5Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
  ];
   
  X6Type=[
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  X7Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
  ];
   
  X8Type=[
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  X9Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
  ];
   
  X10Type=[
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  X11Type=[
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Torn', viewValue: 'Torn'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  X12Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
  ];


  X13Type = [
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  X14Type = [
    {value:'Scratch"',viewValue:'Scratch'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Aftermarket',viewValue:'Aftermarket'},
    {value:'Chip',viewValue:'Chip'}
  ];

  X15Type = [
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ]

  Y1Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
  ];

  Y2Type=[
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];


  Y3Type=[
    {value:'Bent',viewValue:'Bent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'}
  ];

  Y4Type=[
    {value:'< 2"',viewValue:' < 2"'},
    {value:'2-4"',viewValue:'2-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  Y5Type = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chip',viewValue:'Chip'}
  ];

  Y6Type = [
    {value:'Scratch"',viewValue:'Scratch'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Chip',viewValue:'Chip'},
    {value:'Aftermarket',viewValue:'Aftermarket'},
    {value:'Molding damage',viewValue:'Molding damage'}
  ];

  Y7Type = [
    {value:'Loose',viewValue:'Loose'},
    {value:'Cut',viewValue:'Cut'},
    {value:'Torn',viewValue:'Torn'},
    {value:'Burn < 1/4"',viewValue:'Burn < 1/4"'},
    {value:'Burn > 1/4"',viewValue:'Burn > 1/4"'}
  ];

  Y8Type=[
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Cut', viewValue: 'Cut'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  Y9Type = [
    {value:'Loose',viewValue:'Loose'},
    {value:'Cut',viewValue:'Cut'},
    {value:'Torn',viewValue:'Torn'},
    {value:'Burn < 1/4"',viewValue:'Burn < 1/4"'},
    {value:'Burn > 1/4"',viewValue:'Burn > 1/4"'}
  ];

  Y10Type = [
    {value:'Cut',viewValue:'Cut'},
    {value:'Puncture',viewValue:'Puncture'},
    {value:'Buldge',viewValue:'Buldge'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Wear Pattern',viewValue:'Wear Pattern'}
  ];

  Y11Type = [ 
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  FrntEndDT1 =[
    {value:'Moisture inside',viewValue:'Moisture inside'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Broken',viewValue:'Broken'},
    {value:'Inoperative',viewValue:'Inoperative'},
     ];

  FrntEndDT2=[
    {value:'Moisture inside',viewValue:'Moisture inside'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Broken',viewValue:'Broken'},
    {value:'Inoperative',viewValue:'Inoperative'},

  ];

  FrntEndDT3=[
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'chips',viewValue:'chips'},
  ];

  FrntEndDS1=[
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  
  ];

  FrntEndDT4=[
    {value:'Cracked',viewValue:'Cracked'},
    {value:'Loose',viewValue:'Loose'}
  ];

  FrntEndDT5=[
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  FrntEndDS2= [
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  EngCmpt1 =[
    {value:'CLE',viewValue:'CLE'},
    {value:'BRO',viewValue:'BRO'},
    {value:'BLA',viewValue:'BLA'}
  ];
  
  LftFrntDT1 =[
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  LftFrntDS1 = [
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  LftFrntDT2 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  LftFrntDS2 = [
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  LftFrntDT3 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  LftFrntDS3 =[
    {value:'< 1"',viewValue:' < 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  LftFrntDT4 = [
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Chip',viewValue:'Chip'},
    {value:'Aftermarket',viewValue:'Aftermarket'},
    {value:'Molding damage',viewValue:'Molding damage'},
  ];

  LftFrntDT5 = [
    {value:'Bent',viewValue:'Bent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Color mismatch',viewValue:'Color mismatch'},
    {value:'Chip',viewValue:'Chip'}
  ];
  
  LftFrntDT6 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  LftFrntDS6 =[
    {value:'< 1"',viewValue:'< 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  LftFrntDT7=[
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Bent',viewValue:'Bent'},
  ];

  LftFrntDS7 =[
    {value:'< 2"',viewValue:'< 2"'},
    {value:'2-4"',viewValue:'2-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  LftFrntDT8 =[
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Chip',viewValue:'Chip'},
    {value:'Aftermarket',viewValue:'Aftermarket'}
  ]

  LftFrntDT11 =[
    {value:'Cut',viewValue:'Cut'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Puncture',viewValue:'Puncture'},
    {value:'Buldge',viewValue:'Buldge'},
    {value:'Wear Pattern',viewValue:'Wear Pattern'},
  ];

  RgtSdeDT1 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  RgtSdeDS1 =[ 
    {value:'< 1"',viewValue:'< 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  RgtSdeDT2 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  RgtSdeDS2 =[ 
    {value:'< 1"',viewValue:'< 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  RgtSdeDT3 = [
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  RgtSdeDS3 =[ 
    {value:'< 1"',viewValue:'< 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  RgtSdeDT4 =[
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Chip',viewValue:'Chip'},
    {value:'Aftermarket',viewValue:'Aftermarket'},
    {value:'Molding damage',viewValue:'Molding damage'},
  ];

  RgtSdeDT5 =[
    {value:'Bent',viewValue:'Bent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Color mismatch',viewValue:'Color mismatch'},
    {value:'Chip',viewValue:'Chip'}
  ];

  RgtSdeDT6 =[
    {value:'Cut',viewValue:'Cut'},
    {value:'Torn',viewValue:'Torn'},
    {value:'Burn < 1/4"',viewValue:'Burn < 1/4"'},
    {value:'Burn > 1/4"',viewValue:'Burn > 1/4"'}
  ];

  RgtSdeDT7 = [
    {value:'Loose',viewValue:'Loose'},
    {value:'Cut',viewValue:'Cut'},
    {value:'Torn',viewValue:'Torn'},
    {value:'Burn < 1/4"',viewValue:'Burn < 1/4"'},
    {value:'Burn > 1/4"',viewValue:'Burn > 1/4"'}
  ];

  RgtSdeDT8=[
    {value: 'Broken', viewValue: 'Broken'},
    {value: 'Cut', viewValue: 'Cut'},
    {value: 'Inoperative', viewValue: 'Inoperative'},
    {value: 'Missing', viewValue: 'Missing'}
  ];

  RgtSdeDT9=[
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crack',viewValue:'Crack'},
    {value:'Chip',viewValue:'Chip'},
    {value:'Aftermarket',viewValue:'Aftermarket'}
  ];

  RgtSdeDT10=[
    {value:'Dent',viewValue:'Dent'},
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Crease',viewValue:'Crease'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Tear',viewValue:'Tear'},
    {value:'Chips',viewValue:'Chips'}
  ];

  RgtSdeDS10 =[
    {value:'< 1"',viewValue:'< 1"'},
    {value:'1-4"',viewValue:'1-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  RgtSdeDT11 =[
    {value:'Scratch',viewValue:'Scratch'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Bent',viewValue:'Bent'},
  ];

  RgtSdeDS11 =[
    {value:'< 2"',viewValue:'< 2"'},
    {value:'2-4"',viewValue:'2-4"'},
    {value:'4-8"',viewValue:'4-8"'},
    {value:'>8"',viewValue:'>8"'}
  ];

  RgtSdeDT12 =[
    {value:'Cut',viewValue:'Cut'},
    {value:'Puncture',viewValue:'Puncture'},
    {value:'Buldge',viewValue:'Buldge'},
    {value:'Gouge',viewValue:'Gouge'},
    {value:'Wear Pattern',viewValue:'Wear Pattern'}
  ];
}
