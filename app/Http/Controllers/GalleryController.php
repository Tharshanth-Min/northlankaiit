<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\GalleryResourceCollection;
use App\Models\Gallery;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
class GalleryController extends Controller
{

    public function index(Request $request) {

        try {
            if ($request->has('searchquery')) {
                $q = $request->input('searchquery');
                $galleryResourceCollection = new GalleryResourceCollection(Gallery::where('title', 'LIKE', '%' . $q . '%')->orderBy('id', 'DESC')->paginate($request->per_page));
            }else{
                $galleryResourceCollection = new GalleryResourceCollection(Gallery::paginate($request->per_page));
            }
            return $galleryResourceCollection;

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }


    public function create()
    {
        //
    }


    public function store(Request $request) {

        $user = Auth::user()->id;
        if ($request->type) {


        $extension = explode('/', $request->type);

        $image = $request->image;
        $image = str_replace('data:'.$request->type.';base64', '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = Str::random(10).'.'.$extension[1];
        File::put(storage_path(). '/app/public/northLankaIIT/gallery/' . $imageName, base64_decode($image));
        }else{
            $imageName = 'nulll';
        }

        $gallery =  Gallery::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imageName,
            'image_name' => $request->image_name,
            'image_size' => $request->image_size,
            'modified_by' => $user,
            'modified_at' => Carbon::now()->toDateTimeString(),
        ]);

        return response()->json([
            'status' => 200,
            'message' => "gallery added",
            'gallery' => $gallery
        ], 200);

    }


    public function show($id) {
        try {
            $gallery = DB::table('galleries')->where('id', $id)->first();

            return response()->json([
                'status' => 200,
                'gallery' => $gallery
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }


    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id) {
        $user = Auth::user()->id;

        $gallery = Gallery::findOrFail($id);
        $extension = explode('/', $request->type);

        if ($request->image == storage_path("/app/public/northLankaIIT/gallery/") . $gallery->image) {
            $img = $gallery->image;
            $imageName = $gallery->image_name;
            $imageSize = $gallery->image_size;
        }else {
            File::delete(storage_path("/app/public/northLankaIIT/gallery/". $gallery->image));
            $imageName = $request->image_name;
            $imageSize = $request->image_size;
            $image = $request->image;
            $image = str_replace('data:'.$request->type.';base64', '', $image);
            $image = str_replace(' ', '+', $image);
            $img = Str::random(10).'.'.$extension[1];
            File::put(storage_path(). '/app/public/northLankaIIT/gallery/' . $img, base64_decode($image));
        }

        if ($request->description == null)
            $description = $gallery->description ;
        else
            $description = $request->description;

        $gallery =  $gallery->update([
            'title' => $request->title,
            'description' => $description,
            'image' => $img,
            'image_name' => $imageName,
            'image_size' => $imageSize,
            'modified_by' => $user,

            'modified_at' => Carbon::now()->toDateTimeString(),
        ]);

        return response()->json([
            'status' => 200,
            'message' => "gallery updated",
            'gallery' => $gallery
        ], 200);


    }


    public function destroy($id) {
        try {
            $gallery = Gallery::findOrFail($id);
            if(File::exists(storage_path("/app/public/northLankaIIT/gallery/".$gallery->image))) {
                File::delete(storage_path("/app/public/northLankaIIT/gallery/".$gallery->image));
                $gallery->delete();
                return response()->json([
                    'status' => 200,
                    "message" => "gallery deleted",
                ], 200);
            }else {
                $gallery->delete();
                return response()->json([
                    'status' => 200,
                    "message" => "Image not found",
                ], 200);
            }


        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }

    public function galleries() {
        return view('gallery');
    }
}
