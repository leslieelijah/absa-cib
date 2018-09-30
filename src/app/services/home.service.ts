import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    public currencies: any = {
        'currency': [{'name': 'USD'},
        {'name': 'ZAR'},
        {'name': 'EURO'},
        {'name' : 'POND'}]
    };
}
