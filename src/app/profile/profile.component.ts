import { Component } from '@angular/core'
import { AuthenticationService, ResourceDetails } from '../authentication.service'

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  resources: ResourceDetails[]

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.resources = this.auth.getResourceDetails()
  }
}
