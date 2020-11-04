<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NewsResourceCollection;
use Illuminate\Support\Facades\DB;
use App\Models\News;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;

class NewsController extends Controller{

    public function index(Request $request) {
        try {
            if ($request->has('searchquery')) {
                $q = $request->input('searchquery');
                $newsResourceCollection = new NewsResourceCollection(News::where('posted_by', 'LIKE', '%' . $q . '%')->orderBy('id', 'DESC')->paginate($request->per_page));
            }else{
                $newsResourceCollection = new NewsResourceCollection(News::orderBy('id', 'DESC')->paginate($request->per_page));
            }
            return $newsResourceCollection;

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
        try {
            $user = Auth::user()->id;

            $news =  News::create([
                'title' => $request->title,
                'posted_by' => $request->postedBy,
                'posted_on' => $request->postedOn,
                'description' => $request->description,
                'modified_by' => $user,
                'modified_at' => Carbon::now()->toDateTimeString()
            ]);

            Storage::disk('local')->makeDirectory('public/northLankaIIT/news/'.'news-'.$news->id);

            return response()->json([
                'status' => 200,
                'message' => "news added",
                'news' => $news
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }


    public function show($id) {
        try {
            $news = DB::table('news')->where('id', $id)->first();

            return response()->json([
                'status' => 200,
                'news' => $news
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
        try {
            $user = Auth::user()->id;

            $news = News::findOrFail($id);

            if ($request->description == null)
                $description = $news->description ;
            else
                $description = $request->description;

            $news =  $news->update([
                'title' => $request->title,
                'posted_by' => $request->postedBy,
                'posted_on' => $request->postedOn,
                'description' => $description,
                'modified_by' => $user,
                'modified_at' => Carbon::now()->toDateTimeString()
            ]);

            return response()->json([
                'status' => 200,
                'message' => "news update",
                'news' => $news
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }


    public function destroy($id) {
        try {
            $news = News::findOrFail($id);
            $folderPath = storage_path("/app/public/northLankaIIT/news/news-".$id);
            File::deleteDirectory($folderPath);

            $news->delete();
            return response()->json([
                'status' => 200,
                "message" => "news deleted",
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }

    public function viewNews() {
        $news = News::with('newsImages')->paginate(6);
        return view('news.index', compact('news'));
    }

    public function showImage($title)
    {

        $news = News::with('newsImages')->where('title', $title)->first();
        if ($news !== null) {
            return view('news.show', compact('news'));
        } else {
            return redirect('/blog');
        }
    }
}
