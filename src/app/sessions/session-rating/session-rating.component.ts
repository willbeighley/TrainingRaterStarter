import { Component, OnInit, Input } from '@angular/core';
import { SessionRatingsService, ISessionRating, RatingValue } from './session-ratings.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
    selector: 'app-session-rating',
    templateUrl: './session-rating.component.html',
})
export class SessionRatingComponent implements OnInit {
    @Input() sessionId: number;

    hasBeenRatedByUser: boolean;
    ratingMode = false;
    avgRating: number;
    selectedRating: RatingValue;
    ratings: { value: RatingValue, name: string }[] = [
        { value: 1, name: '1 star' },
        { value: 2, name: '2 star' },
        { value: 3, name: '3 star' },
        { value: 4, name: '4 star' },
        { value: 5, name: '5 star' },
    ];

    constructor(
        private ratingService: SessionRatingsService,
        private toastManager: ToastsManager,
    ) { }

    ngOnInit() {
        this.getAvgRating();
        this.ratingService.hasBeenRatedByUser(1, this.sessionId)
            .subscribe((hasBeenRated) => this.hasBeenRatedByUser = hasBeenRated);
    }

    getAvgRating(): void {
        this.ratingService.getAvgRating(this.sessionId)
            .subscribe((avgRating) => this.avgRating = avgRating);
    }

    stopTheClick(event: Event): void {
        event.stopPropagation();
    }

    submit(): void {
        const rating: ISessionRating = {
            userId: 1,
            sessionId: this.sessionId,
            rating: this.selectedRating,
            createDate: new Date(),
        };
        this.ratingService.save(rating)
            .subscribe(() => {
                this.toastManager.success('Rating submitted');
                this.getAvgRating();
                this.ratingMode = false;
                this.hasBeenRatedByUser = true;
            });
    }
}
