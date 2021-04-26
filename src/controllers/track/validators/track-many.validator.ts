import { object, string } from 'joi';

export class TrackManyValidator {

    public validCodesPattern = /^([A-Z]{2}[0-9]{9}[A-Z]{2})(\,([A-Z]{2}[0-9]{9}[A-Z]{2}))*,?$/;

    public get query() {

        return object({
            codes: string().regex(this.validCodesPattern).required(),
        });

    }

}
