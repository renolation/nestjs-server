import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    @Get('/abc')
    getRootRoute(){
    return 'hello';
    }

}