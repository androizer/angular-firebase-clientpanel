import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).snapshotChanges().subscribe(action => {
      this.client = {key: action.key, ...action.payload.val()};
    });
  }

  onDelete() {
    console.log('Delete Button Pressed');
  }
}
