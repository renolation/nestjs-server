import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from "@nestjs/common";
import { Observable} from "rxjs";
import {map} from 'rxjs/operators';
import { plainToClass} from "class-transformer";

export class SerializeInterceptor implements  NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
        console.log('running before', context);
        return handler.handle().pipe(
            map((data: any) => {
                console.log('after handle', data);
            })
        )
    }
}

