import { Response } from "express";

export class  SkaiciuokleController {
    static apskaiciuoti(req:any, res:any) {
        console.log("Skaiciuojami rezultatai")
        let x = parseInt(req.body.x);
        let y =parseInt(req.body.y);
        console.log();
        res.json({
            "rezultatas":(x+y)
        })
    }
    static skaiciai(req:any, res:any){
        res.json({
            "skaicius":99
        });
    }
}