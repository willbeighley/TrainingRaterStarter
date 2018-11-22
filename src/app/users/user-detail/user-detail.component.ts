import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';

@Component({
    templateUrl: './user-detail.component.html',
})
export class UsersDetailComponent implements OnInit {

    user: IUser;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
    ) { }

    ngOnInit() {
        let id: string | number = this.route.snapshot.paramMap.get('userId');
        // tslint:disable-next-line:radix
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id > 0) {
            // get from db
            this.usersService.getUserById(id)
                .subscribe((user) => {
                    this.user = user;
                });
        } else {
            // new
            this.user = {
                id: 0,
                name: '',
                email: '',
                createdAt: '',
                updatedAt: '',
            };
        }
    }

    save(): void {
        if (!this.formValid()) {
            // TODO CCC: pop message about not valid
            console.log('form invalid');
            return;
        }
        this.usersService.save(this.user)
            .subscribe((user) => {
                // TODO CCC: add a success message
                this.router.navigate(['users']);
            });
    }

    private formValid(): boolean {
        return this.user.name && this.user.email ? true : false;
    }

    cancel(): void {
        this.router.navigate(['users']);
    }

}
