import { Controller, Get, Param } from "@nestjs/common"

@Controller("pets")
export class PetController {
    @Get("")
    getList() {
        return "Pet List 1";
    }

    @Get(":id")
    getDetail(@Param() { id }: { id: number }) {
        return `Pet Detail ${id}`;
    }
}