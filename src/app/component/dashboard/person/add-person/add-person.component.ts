import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../state/app-state";
import * as PersionActions from "../../../../state/person/person-action";
import Swal from "sweetalert2";
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit{
    personForm!: FormGroup;
    fileInputs: { [key: string]: File } = {};

  constructor(private store: Store<AppState>,
                private fb : FormBuilder) {}

    ngOnInit(): void {
      this.personForm = this.fb.group({
        name: ['', Validators.required],
        imageFile: ['', Validators.required],
        birthDate: ['', Validators.required],
        nationality: ['', Validators.required],
        biography: ['', Validators.required]
      });
    }

    onSubmit(): void {
      if (this.personForm.valid) {

        const formData = new FormData();
        Object.keys(this.personForm.controls).forEach(key => {
          if (this.fileInputs[key]) {
            formData.append(key, this.fileInputs[key]);
          } else  {
            formData.append(key, this.personForm.get(key)?.value);
          }
        });
        this.store.dispatch(PersionActions.addPerson({ person: formData }));
        Swal.fire("Person Added Successfully", "success");
        this.personForm.reset();
      }
    }
  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      this.fileInputs[field] = event.target.files[0];
    }
  }
}
