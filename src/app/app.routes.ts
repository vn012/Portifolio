import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuSuperiorComponent } from './pages/menu-superior/menu-superior.component';
import path from 'path';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent}
];
