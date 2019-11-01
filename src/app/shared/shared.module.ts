// module
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VirtualScrollerModule } from "ngx-virtual-scroller";
import { TooltipModule } from "ng2-tooltip-directive";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { QRCodeModule } from "angular2-qrcode";
import { NgxPrintModule } from "ngx-print";
import { Angular2CsvModule } from "angular2-csv";

// components
import { CarouselComponent } from "./carousel/carousel.component";
import { SharedTableComponent } from "./shared-table/shared-table.component";
import { SharedClienteSearchComponent } from "./shared-cliente-search/shared-cliente-search.component";
import { SharedFormComponent } from "./shared-form/shared-form.component";
import { SharedCheckboxComponent } from "./shared-checkbox/shared-checkbox.component";
import { SharedSectionComponent } from "./shared-section/shared-section.component";
import { SharedSidenavComponent } from "./shared-sidenav/shared-sidenav.component";
import { ElementComponent } from "./shared-section/element/element.component";
import { SharedFontsComponent } from "./shared-fonts/shared-fonts.component";
import { SharedUtentiSelectComponent } from "./shared-utenti-select/shared-utenti-select.component";
import { SharedContEditableComponent } from "./shared-cont-editable/shared-cont-editable.component";
import { SharedImportJSONComponent } from "./shared-import-json/shared-import-json.component";
import { SharedAlertsComponent } from "./shared-alerts/shared-alerts.component";
import { DropZoneDirective } from "./directives/drop-zone.directive";
import { FileSizePipe } from "./pipes/file-size.pipe";
import { IndirizzoComponent } from "./indirizzo/indirizzo.component";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import { JumboComponent } from "./jumbo/jumbo.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    Angular2CsvModule,
    ScrollDispatchModule,
    CKEditorModule,
    NgSelectModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    VirtualScrollerModule,
    TooltipModule,
    NgxChartsModule,
    QRCodeModule,
    NgxPrintModule
  ],
  declarations: [
    CarouselComponent,
    SharedTableComponent,
    SharedClienteSearchComponent,
    SharedFormComponent,
    SharedCheckboxComponent,
    SharedSectionComponent,
    SharedSidenavComponent,
    ElementComponent,
    SharedFontsComponent,
    SharedUtentiSelectComponent,
    SharedContEditableComponent,
    SharedImportJSONComponent,
    SharedAlertsComponent,
    DropZoneDirective,
    FileSizePipe,
    IndirizzoComponent,
    JumboComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2CsvModule,
    ScrollDispatchModule,
    NgxChartsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    CommonModule,
    CKEditorModule,
    NgSelectModule,
    VirtualScrollerModule,
    TooltipModule,
    CarouselComponent,
    SharedTableComponent,
    SharedClienteSearchComponent,
    SharedFormComponent,
    SharedCheckboxComponent,
    SharedSectionComponent,
    SharedSidenavComponent,
    SharedFontsComponent,
    SharedUtentiSelectComponent,
    SharedContEditableComponent,
    SharedImportJSONComponent,
    QRCodeModule,
    SharedAlertsComponent,
    DropZoneDirective,
    NgxPrintModule,
    FileSizePipe,
    JumboComponent
  ]
})
export class SharedModule {}
