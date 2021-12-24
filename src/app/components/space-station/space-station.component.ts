import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { SpaceStationService } from 'src/app/services/space-station.service';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { NotesDialogComponent } from '../notes-dialog/notes-dialog.component';

@Component({
  selector: 'app-space-station',
  templateUrl: './space-station.component.html',
  styleUrls: ['./space-station.component.scss']
})
export class SpaceStationComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  longitude: string;
  latitude: string;
  timestamp: number;
  commentList: any[]=[];

  constructor(private spaceStationService: SpaceStationService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.subscription = timer(0, 2000).pipe(
      switchMap(() => this.spaceStationService.getCoordinates())
    ).subscribe(result => {
      this.longitude = result.iss_position.longitude;
      this.latitude = result.iss_position.latitude;
      this.timestamp = result.timestamp;
    }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClick() {
    const dialogRef = this.dialog.open(NotesDialogComponent, {
      width: '600px',
      height: '400px',
      data: { timestamp: this.timestamp, longitude: this.longitude, latitude: this.latitude },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.commentList.push(result);
    });

  }

  
}


