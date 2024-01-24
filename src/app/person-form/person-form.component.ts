import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  personForm!: FormGroup;

  constructor(private fb: FormBuilder, private personService: PersonService) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: ['', Validators.required],
      employmentStatus: ['', Validators.required],
    });

    this.initForm();
  }

  ngOnInit(): void {
    // logic
  }

  initForm(): void {
    // logic
  }

  onSubmit(): void {
    const formData: Person = this.personForm.value;
    this.personService.createPerson(formData).subscribe((response) => {
      console.log('Submit:', response);
      // logic
    });
  }

  onUpdate(): void {
    const formData: Person = this.personForm.value;
    //const personId: number = formData.id;
    delete formData.id;
    this.personService;
    //.updatePerson(personId, formData)
    //.subscribe((response) => {
    // console.log('Update:', response);
    // logic
    const result = confirm('Are you sure you want to update this person?');

    if (result) {
      // Perform the actual update operation
      this.personService;
      // .updatePerson(personId, formData)
      // .subscribe((response) => {
      // console.log('Update:', response);
      // logic
      // });
    }
    // });
  }

  onDelete(): void {
    const personId: number | undefined = this.personForm.value.id;

    if (personId !== undefined) {
      this.personService.deletePerson(personId).subscribe((response) => {
        console.log('Delete:', response);

        // Display a confirmation dialog before deleting the person
        const result = confirm('Are you sure you want to delete this person?');

        if (result) {
          // Perform the actual delete operation
          this.personService.deletePerson(personId).subscribe((response) => {
            console.log('Delete:', response);

            // Additional logic after delete if needed
          });
        }
      });
    } else {
      console.log('Cannot delete without personId');
    }
  }
}
