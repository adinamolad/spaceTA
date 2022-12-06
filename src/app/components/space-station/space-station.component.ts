import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { SpaceStationService } from 'src/app/services/space-station.service';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { NotesDialogComponent } from '../notes-dialog/notes-dialog.component';
import { LocationNote } from 'src/app/models/location-note.model';

@Component({
  selector: 'app-space-station',
  templateUrl: './space-station.component.html',
  styleUrls: ['./space-station.component.scss']
})
export class SpaceStationComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  timestamp: number;
  locationNote: LocationNote = {note: '', latitude:0, longitude: 0};
  commentList: LocationNote[]=[];
  displayedColumns: string[] = ['latitude', 'longitude', 'note'];

  constructor(private spaceStationService: SpaceStationService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.subscription = timer(0, 2000).pipe(
      switchMap(() => this.spaceStationService.getCoordinates())
    ).subscribe(result => {
      this.timestamp= result.timestamp;
      this.locationNote.longitude = result.iss_position.longitude;
      this.locationNote.latitude = result.iss_position.latitude;
    }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClick() {
    const tempLocation = {note: '', latitude:this.locationNote.latitude, longitude: this.locationNote.longitude};
    const dialogRef = this.dialog.open(NotesDialogComponent, {
      width: '600px',
      height: '400px',
      data: tempLocation,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.spaceStationService.saveOnServer(result).subscribe(result=>{
        this.commentList = result;
      });
    });

  }

  
}


