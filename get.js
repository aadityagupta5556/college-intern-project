

const getBlogsbyId = async function (req, res) {
    try {
      let blogId = req.blogId;
          
      //Deleting blog and adding timestamp
      let blog = await blogsmodel.findOne(
        { _id: blogId, isDeleted: false },
     
      );
      if (!blog) {
        return res.status(404).send({ status: false, msg: "Blog Not Found" });
      }
      res.status(200).send({ status: true, msg: "Document is deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: false, msg: error.message });
    }
  };