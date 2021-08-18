import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
    todos:todo[]=[
     
    ]
   
    currentitem= ""
    Addtodo()
    {
      
      this.todos.push({
        content:this.currentitem,
        active:false
      })
      this.currentitem= ""
    }

    remove(i:number)
    {
          this.todos.splice(i,1)
    }

    checkedbox(todo:todo)
    {
      const index = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active
    }
  
    todoform!:FormGroup;

   
  
  constructor() { }

  ngOnInit(): void {

    this.todoform = new FormGroup({

      'todovalid': new FormControl(null,[Validators.required,Validators.pattern('^[^\s].[^\s].[^\s].[^\s].[^\s].[^\s].[^\s].[^\s].[^\s].[^\s]+[^\s]$')]),
    });
  }

}
