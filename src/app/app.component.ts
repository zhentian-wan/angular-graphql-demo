import {Component, OnInit} from '@angular/core';
import gql from "graphql-tag/index";
import {Angular2Apollo} from "angular2-apollo";

import 'rxjs/add/operator/map';

const TodosQuery = gql`
 query AllPosts {
  allPosts {
   id
   todo
   completed
  }
 }
`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: any;
  constructor(private apollo: Angular2Apollo) {

  }

  ngOnInit(): void {
    this.todos = this.apollo.watchQuery({
      query: TodosQuery
    }).map(({data}) => {
      return data.allPosts;
    });
  }
}
