import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit 
{
  public departmentId;

  constructor(private router:ActivatedRoute, private router2: Router) { }

  ngOnInit(): void 
  {
    // let id = parseInt(this.router.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    this.router.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });

  }

  goPrevious()
  {
    let pId = this.departmentId === 1 ? 1 : this.departmentId - 1;
    this.router2.navigate(['/departments', pId]);
    
  }
  
  goNext()
  {
    let nId = this.departmentId === 5 ? 5 : this.departmentId + 1;
    this.router2.navigate(['/departments', nId]);
  }

  goToDepartments()
  {
    let selectedId = this.departmentId ? this.departmentId : null;

    this.router2.navigate(['../', {id:selectedId}], {relativeTo: this.router});
  }

  showOverview()
  {
    this.router2.navigate(['overview'], {relativeTo: this.router});
  }

  showContact()
  {
    this.router2.navigate(['contact'], {relativeTo: this.router});
  }



}
