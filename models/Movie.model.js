//  Add your code here
const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
    {
      title: String,
      genre: String,
      plot: String,
      // cast: [{
      //   _id: { type: Schema.ObjectId, ref: 'Celebrity' },
      //   name: { type: String, ref: "Celebrity" }
      // }]
      // 
      cast: [
        {
          type: Schema.Types.ObjectId,
          ref: "Celebrity",
          select: "name"
        }
      ]
    },
    {
      timestamps: true
    }
  );

const Movie = model("Movie", movieSchema);

module.exports = Movie;