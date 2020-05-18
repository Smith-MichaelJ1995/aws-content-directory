import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

export interface ResourceDetails {
  name: string
  description: string
  link: string
}

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {}

  public getResourceDetails(): any {
    return [
        {
            "name": "EC2 basics",
            "description":"This contains information about EC2",
            "link":"https://www.guru99.com/aws-tutorial.html"
        },
        {
            "name": "S3 beginners",
            "description":"This contains information about S3",
            "link":"https://www.edureka.co/blog/s3-aws-amazon-simple-storage-service/"
        }
    ]
  } 
}
