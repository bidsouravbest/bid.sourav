import { Component, OnInit } from '@angular/core';
import { Router,ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

  departments = [
    { "id":1, "name":"Angular" },
    { "id":2, "name":"Java" },
    { "id":3, "name":"Python" },
    { "id":4, "name":"Bootstrap" },
    { "id":5, "name":"JavaScript" }
  ];

  constructor(private router:Router, private route : ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department)
  {
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department)
  {
    return department.id === this.selectedId;
  }



}
