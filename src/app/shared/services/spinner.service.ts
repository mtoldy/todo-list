import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {

    private visible: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public isVisible: Observable<boolean> = this.visible.asObservable();


    showSpinner() {
        this.visible.next(true);
    }

    hideSpinner() {
        this.visible.next(false);
    }

}