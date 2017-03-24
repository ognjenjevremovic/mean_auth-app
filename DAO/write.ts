import * as mongoose from 'mongoose';



abstract class Create {

    constructor(
        protected model: mongoose.Model<mongoose.Document>
    ) { }

    public async insertOne(
        docObject   : Object
    ): Promise<mongoose.Document> {
        const document : mongoose.Document = await new this.model(docObject).save();

        return document;
    }
}
