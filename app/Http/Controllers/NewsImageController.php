<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NewsImage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;

class NewsImageController extends Controller{

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request) {


            $user = Auth::user()->user_name;
            $extension = explode('/', $request->type);
            $image = $request->image;
            $image = str_replace('data:'.$request->type.';base64', '', $image);
            $image = str_replace(' ', '+', $image);
            $imageName = Str::random(10) . '.' .$extension[1] ;
            File::put(storage_path() . '/app/public/northLankaIIT/news/news-'.$request->news_id.'/'. $imageName, base64_decode($image));

            $newsImage = NewsImage::create([
                'news_id' => $request->news_id,
                'image' => $imageName,
                'image_name' => $request->image_name,
                'image_size' => $request->image_size,
                'modified_by' => $user,
                'modified_at' => Carbon::now()->toDateTimeString()
            ]);

            $newImages = NewsImage::select("id", "news_id", "image", "image_name")
                ->with(['news' => function($query){
                    $query->select("id", "posted_by");
                }])->where("id", $newsImage->id)->get();


            return response()->json([
                'status' => 200,
                'message' => "image added",
                'image' => $newImages,
            ], 200);


    }


    public function show($id) {

        $newImages = NewsImage::select("id", "news_id", "image", "image_name")
            ->with(['news' => function($query){
                $query->select("id", "posted_by");
            }])
            ->where("news_id", $id)->get();

        return response()->json([
            "status" => 200,
            "newImages" => $newImages
        ], 200);
    }

    public function edit($id) {


    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id) {

    }

    public function removeImage(Request $request) {
        $newsImage = NewsImage::findOrFail($request->id);
        if(File::exists(storage_path("/app/public/northLankaIIT/news/news-".$request->news_id.'/'.$newsImage->image))) {
            File::delete(storage_path("/app/public/northLankaIIT/news/news-".$request->news_id.'/'.$newsImage->image));
            $newsImage->delete();
            return response()->json([
                'status' => 200,
                "message" => "Deleted",
            ], 200);
        }else {
            return response()->json([
                'status' => 200,
                "message" => "Image not found",
            ], 200);
        }
    }
}
