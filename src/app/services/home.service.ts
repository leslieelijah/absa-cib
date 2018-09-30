import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    public currencies: any[] = [{
        'usd': 'USD',
        'rsa': 'ZAR',
        'uk': 'EURO',
        'britain': 'POND',
    }];
}
