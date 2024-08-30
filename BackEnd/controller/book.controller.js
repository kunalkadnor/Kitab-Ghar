import Book  from "../model/book.model.js";
export const getBook = async (req,res)=>{
    try{

        const book = await Book.find();
        res.status(200).json(book)
        
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


export const addBook = async (req,res)=>{
    try{
        const newBook = new Book(req.body);
        await newBook.save();
  
        res.status(200).json(newBook)
        
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


export const updateBook = async (req,res)=>{
    try{
        
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
        res.status(200).json(updatedBook)
        
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


export const deleteBook = async (req,res)=>{
    try{
        
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: 'Book deleted' });
        
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}






