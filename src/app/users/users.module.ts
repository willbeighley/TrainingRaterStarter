import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UsersComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        UsersService,
    ],
})
export class UsersModule { }

