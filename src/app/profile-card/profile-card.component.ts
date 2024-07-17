import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { profileModel } from './model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ButtonModule,CardModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent implements OnInit{
 
  id: any;
  selectedUser!: any;
  route = inject(ActivatedRoute)
  http = inject(HttpClient)
 

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (paramMap) => {
          this.id = paramMap.get('userId')
          this.http.get<any>('http://localhost:3000/user/' + this.id, { responseType: 'json' }).subscribe(buffer => {
          console.log('user', buffer)
          this.selectedUser = buffer;
        });
      }
    })
    
  }

}
