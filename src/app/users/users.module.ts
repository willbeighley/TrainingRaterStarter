import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';
import { UsersDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        UsersComponent,
        UsersDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        UsersService,
    ],
})
export class UsersModule { }

