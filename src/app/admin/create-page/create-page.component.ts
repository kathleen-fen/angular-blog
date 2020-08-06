import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.title,
      text: this.form.value.title,
      date: new  Date()

    }
  }

}