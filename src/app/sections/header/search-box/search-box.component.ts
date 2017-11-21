import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  searchBoxOpen: Boolean = false;

  projects: Observable<any>;
  searchResult: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.projects = this.afs.collection('users/v1anOGRzYiODNMhYqojlEIIU5ws1/projects').valueChanges();
    this.searchResult = this.projects;
  }

  search(value) {
    this.searchResult = this.projects.map(data => data.filter(x => x['name'] === value));
  }

  clear() {
    console.log('clearing... results');
    this.searchResult = this.projects;
  }
}
