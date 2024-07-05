import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {  ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { MenuModule } from 'primeng/menu';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MessagesModule
  ],
  exports: [
    CommonModule,
    CheckboxModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputSwitchModule,
    FormsModule,
    RouterModule,MessagesModule,
    MenuModule
    
  ]
})
export class UiModule { }
