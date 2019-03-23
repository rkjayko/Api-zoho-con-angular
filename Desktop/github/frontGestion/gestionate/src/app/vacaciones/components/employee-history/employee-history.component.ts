import { Component, OnInit } from '@angular/core';
import { PeriodSummary } from '../../model/period-summary.model';
import { EmployeeHistoryService } from '../../services/employee-history.service';
import { PeriodDetails } from '../../model/period-details.model';
import { PeriodDetail } from '../../model/period-detail.model';
import { EmployeeInfo } from '../../model/employee-info.model';
import { EmployeeInfoService } from '../../services/employee-info.service';
import { forkJoin } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.css']
})
export class EmployeeHistoryComponent implements OnInit {

  employeeId: number;

  periodsSummary: PeriodSummary[] = [];

  periodDetails: PeriodDetails[] = [];

  employeeInfo: EmployeeInfo;

  constructor(
    private employeeHistoryService: EmployeeHistoryService,
    private employeeInfoService: EmployeeInfoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.initilizeData();
  }

  initilizeData() {
    this.employeeId = this.route.snapshot.params['employeeId'];
    forkJoin(
      this.employeeHistoryService.getEmployeePeriodsHistory(this.employeeId),
      this.employeeInfoService.getEmployeeInfo(this.employeeId)
    ).subscribe((respuesta: [PeriodSummary[], EmployeeInfo]) => {
      this.periodsSummary = respuesta[0];
      this.employeeInfo = respuesta[1];
    })
  }

  onPeriodTabOpen(event) {
    this.employeeHistoryService.getEmployeePeriodDetails(this.periodsSummary[event.index].idPeriodo)
      .subscribe((periodDetail: PeriodDetail[]) => {
        this.periodDetails[event.index] = new PeriodDetails(periodDetail);
      });
  }
}
