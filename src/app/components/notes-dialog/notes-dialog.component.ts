import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LocationNote } from 'src/app/models/location-note.model';

@Component({
  selector: 'app-notes-dialog',
  templateUrl: './notes-dialog.component.html',
  styleUrls: ['./notes-dialog.component.scss']
})
export class NotesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationNote) { }

  ngOnInit() {
    this.data.note = "";
  }

  onCancelClick(){
    this.dialogRef.close();
  }

  onSaveClick(){
    if(this.data.note===""){
      alert("Please enter note");
    }else{
      this.dialogRef.close(this.data);
    }
}

}
