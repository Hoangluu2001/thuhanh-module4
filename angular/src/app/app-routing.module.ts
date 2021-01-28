import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./books-list/books-list.component";
import {AddBooksComponent} from "./add-books/add-books.component";
import {EditBookComponent} from "./edit-book/edit-book.component";

const routes: Routes = [
  {path: '', redirectTo: '' , pathMatch: 'full'},
  {path: 'books' , component: BooksListComponent},
  {path: 'add' ,component: AddBooksComponent},
  {path: 'update/:id', component:EditBookComponent},
  {path: 'details/:id', component:BooksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
