import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment.development';
import{PaymentDetail} from './payment-detail'
import{NgForm} from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string=environment.apiBaseUrl + '/PaymentDetails'
list:PaymentDetail[]=[];
formData:PaymentDetail=new PaymentDetail()
formSubmitted:boolean=false;
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url).subscribe({
      next: res=>{
        this.list= res as PaymentDetail[]

        
        },
        error:err=>{
          console.log(err)
      }
    })
  }

  postPaymentDetail(){
    return this.http.post(this.url, this.formData)
  }
  putPaymentDetail(){
    return this.http.put(this.url+'/'+ this.formData.id,this.formData)
  }
  deletePaymentDetail(id:number){
    return this.http.delete(this.url+'/'+ id)
    
  }

  resetForm(Form:NgForm){
    Form.form.reset()
this.formData=new PaymentDetail()
this.formSubmitted=false
  }
}
