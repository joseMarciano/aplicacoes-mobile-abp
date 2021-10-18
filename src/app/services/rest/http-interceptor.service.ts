import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        const request = DefaultHttpParams.create(req)
            .baseUrl(environment.BASE_URL)
            .header('access-token', environment.PROJECT_TOKEN)
            .build();

        return next.handle(request);
    }
}

class DefaultHttpParams {

    private headersParam = new HttpHeaders();
    private urlParam: string;
    private req: HttpRequest<any>;


    constructor(req: HttpRequest<any>) {
        this.req = req;
    }

    static create(req: HttpRequest<any>) {
        return new DefaultHttpParams(req);
    }

    public baseUrl(baseUrl: string) {
        this.urlParam = baseUrl;
        return this;
    }

    public header(key: string, value: string | string[]) {
        this.headersParam = this.headersParam.append(key, value);
        return this;
    }

    public build() {
        return this.req.clone({
            headers: this.headersParam,
            url: this.urlParam + this.req.url
        })
    }


}