import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects-carried-out',
  templateUrl: './projects-carried-out.component.html',
  styleUrls: ['./projects-carried-out.component.less']
})
export class ProjectsCarriedOutComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  homeClick(){
    this.router.navigate(['/dashboard']);
  }

  closeResult: string;

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
