<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    // Display a listing of the products with pagination
    public function index(Request $request)
    {
        // // Get the skip and limit parameters from the request or use default values
        // $skip = $request->input('skip', 0);
        // $limit = $request->input('limit', 30);

        // // Get the total number of products
        // $total = Product::count();

        // // Get the products with pagination
        // $products = Product::skip($skip)->take($limit)->get();

        // // Return a JSON object with the products, total, skip, and limit
        // return response()->json([
        //     'products' => $products,
        //     'total' => $total,
        //     'skip' => $skip,
        //     'limit' => $limit
        // ]);



        // Get the page and per_page parameters from the request or use default values
        $page = $request->input('page', 1);
        $limit = $request->input('limit', 10);

        // Get the total number of products
        $total = Product::count();

        // Get the products with pagination
        $products = Product::paginate($limit, ['*'], 'page', $page);

        // Return a JSON object with the products, total, current page, and limit
        return response()->json([
            'products' => $products->items(),
            'total' => $total,
            'page' => $products->currentPage(),
            'limit' => $limit
        ]);
    }


    // Store a newly created product in the database
    public function store(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'hid' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'general_category' => 'required|string|max:255',
            'specific_category' => 'required|string|max:255',
            'purpose' => 'required|string|max:255',
            'thumbnail' => 'required|image|mimes:jpeg,jpg,png',
            'images' => 'required|array|min:4|max:4',
            'images.*' => 'required|image|mimes:jpeg,jpg,png',
        ]);

        // If validation fails, return an error response with the validation messages
        if ($validator->fails()) {
            return response()->json([
                'error' => true,
                'message' => $validator->messages()
            ], 422);
        }

        // Handle image uploads and store file paths
        $thumbnailPath = $this->storeImage($request->file('thumbnail'), 'thumbnails');
        $imagePaths = [];
        foreach ($request->file('images') as $image) {
            $imagePaths[] = $this->storeImage($image, 'product_images');
        }

        // Create a new product with the image file paths
        $product = Product::create([
            'hid' => $request->input('hid'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'stock' => $request->input('stock'),
            'general_category' => $request->input('general_category'),
            'specific_category' => $request->input('specific_category'),
            'purpose' => $request->input('purpose'),
            'thumbnail' => $thumbnailPath,
            'images' => $imagePaths,
            // Assign other fields here based on your schema
        ]);

        // Return a success response with the created product
        return response()->json([
            'error' => false,
            'message' => "Product created successfully.",
            'product' => $product
        ], 201);
    }

    // Helper method to store images
    private function storeImage(UploadedFile $imageFile, $storageDirectory)
    {
        // Generate a unique filename
        $filename = uniqid() . '_' . now()->timestamp . '.' . $imageFile->getClientOriginalExtension();

        // Store the image in the specified storage directory with the specified name
        $imageFile->storeAs($storageDirectory, $filename, 'public');

        // Return the path to the stored image
        // return 'storage/' . $storageDirectory . '/' . $filename;
        return $filename;
    }

    // Display the specified product by id
    public function show($id)
    {
        // Find the product by id or return a not found response
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'error' => true,
                'message' => "Product not found."
            ], 404);
        }

        // Return a success response with the product
        return response()->json([
            'error' => false,
            'message' => "Product retrieved successfully.",
            'product' => $product
        ], 200);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    // Update the specified product by id in the database
    public function update(Request $request, $id)
    {
        // Find the product by id or return a not found response
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'error' => true,
                'message' => "Product not found."
            ], 404);
        }

        // Validate the request data
        $validator = Validator::make($request->all(), [
            'hid' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'general_category' => 'required|string|max:255',
            'specific_category' => 'required|string|max:255',
            'purpose' => 'required|string|max:255',
            'thumbnail' => 'required|image|mimes:jpeg,jpg,png',
            'images' => 'required|array|min:4|max:4',
            'images.*' => 'required|image|mimes:jpeg,jpg,png',
        ]);

        // If validation fails, return an error response with the validation messages
        if ($validator->fails()) {
            return response()->json([
                'error' => true,
                'message' => $validator->messages()
            ], 422);
        }


        // Update the product with the validated data
        $product->update($validator->validated());

        // Return a success response with the updated product
        return response()->json([
            'error' => false,
            'message' => "Product updated successfully.",
            'product' => $product
        ], 200);
    }

    // Remove the specified product by id from the database
    public function destroy($id)
    {
        // Find the product by id or return a not found response
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'error' => true,
                'message' => "Product not found."
            ], 404);
        }

        // Delete the product from the database
        $product->delete();

        // Return a success response with a message
        return response()->json([
            'error' => false,
            'message' => "Product deleted successfully."
        ], 200);
    }
}