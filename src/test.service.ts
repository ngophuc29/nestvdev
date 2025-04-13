import { Injectable } from "@nestjs/common";

@Injectable() // danh dau class nay la service xong moi chuyen cho
// DI container quan ly de cac container khac co the su dung
// neu khong co Injectable thi khong the su dung duoc
export class TestService {

    calc()
    {
        return 1 + 1;
    }
}