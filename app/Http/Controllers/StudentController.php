<?php
//php artisan db:seed --class="UsersTableSeeder"
namespace App\Http\Controllers;

use App\Http\Resources\StudentResourceCollection;
use App\Models\AlResult;
use App\Models\ArtStream;
use App\Models\CommerceStream;
use App\Models\MathStream;
use App\Models\News;
use App\Models\OlResult;
use App\Models\ScienceStream;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller {

    public function index(Request $request) {
        try {
            if ($request->has('searchquery')) {
                $q = $request->input('searchquery');
                $newsResourceCollection = new StudentResourceCollection(Student::select('id', 'first_name', 'last_name', 'address', 'nic_or_passport_no')
                    ->where('nic_or_passport_no', 'LIKE', '%' . $q . '%')
                    ->orWhere('first_name', 'LIKE', '%' . $q . '%')
                    ->orWhere('last_name', 'LIKE', '%' . $q . '%')
                    ->orWhere('address', 'LIKE', '%' . $q . '%')
                    ->orderBy('id', 'DESC')->paginate($request->per_page));
            }else{
                $newsResourceCollection = new StudentResourceCollection(Student::orderBy('id', 'DESC')->paginate($request->per_page));
            }

            return $newsResourceCollection;

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }


    public function create() {
        //
    }


    public function store(Request $request) {

        $student = Student::create([
            'title' => $request->title,
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'course_id' => $request->courseName,
            'certification_name' => $request->nameCertification,
            'date_of_birth' => $request->dateOfBirth,
            'gender' => $request->gender,
            'nic_or_passport_no' => $request->nicPassportNo,
            'nationality' => $request->nationality,
            'tell_phone_personal' => $request->personalNum,
            'tell_phone_home' => $request->homeNum,
            'tell_phone_office' => $request->officeNum,
            'address' => $request->address,
            'email' => $request->email,
            'work_exp' => $request->workExpe,
            'other_quali' => $request->otherQuali,

        ]);

        $ol = $request->checkedOl;

        if ( $ol === true) {
            OlResult::create([
                'student_id' => $student->id,
                'math' => $request->olMath,
                'science' => $request->olScience,
                'english' => $request->olEnglish,
                'remark' => $request->olRemark,
                'year_of_examination' => $request->ol_year_examination,
                'index_no' => $request->ol_index_no
            ]);
        }

        $al = $request->checkedAl;
        if ( $al === true) {
            $al_result = AlResult::create([
                'student_id' => $student->id,
                'stream_type_id' => $request->stream_type,
                'year_of_examination' => $request->al_year_examination,
                'index_no' => $request->al_index_no
            ]);

            if ($request->stream_type == 1) {
                ScienceStream::create([
                    'al_result_id' => $al_result->id,
                    'biology' => $request->biology,
                    'physics' => $request->physics,
                    'chemistry' => $request->chemistry,
                    'agricultural_science' => $request->agriculturalScience,
                    'english' => $request->english
                ]);
            }


            if ($request->stream_type == 2) {
                MathStream::create([
                    'al_result_id' => $al_result->id,
                    'combined_mathematics' => $request->combinedMathematics,
                    'physics' => $request->physics,
                    'chemistry' => $request->chemistry,
                    'information_technology' => $request->ict,
                    'english' => $request->english
                ]);
                ;
            }

            if ($request->stream_type == 3) {
                CommerceStream::create([
                    'al_result_id' => $al_result->id,
                    'economics' => $request->economics,
                    'accounting' => $request->accounting,
                    'business_studies' => $request->businessStudies,
                    'information_technology' => $request->ict,
                    'english' => $request->english
                ]);
            }

            if ($request->stream_type == 4) {
                ArtStream::create([
                    'al_result_id' => $al_result->id,
                    'tamil' => $request->tamil,
                    'hindu_culture' => $request->hinduCulture,
                    'economics' => $request->artEconomics,
                    'politic' => $request->politic,
                    'geographic' => $request->geographic,
                    'english' => $request->english,
                    'remark' => $request->artRemark

                ]);
            }
        }


        return response()->json([
            'status' => 200,
            'message' => "Registered",
        ], 200);
    }


    public function show($id) {
        $student = Student::with(['course' => function($query) {
                $query->select('id','name');
            }])->with(['olResults' => function($query){
                $query->select('id','index_no', 'remark', 'year_of_examination', 'student_id', 'english', 'math', 'science');
            }])->with(['alResults' => function($query) {
                $query->select('id','index_no', 'year_of_examination', 'student_id', 'stream_type_id')
                    ->with(['streamType' => function($query) {
                        $query->select('id','name');
                    }])->with(['commerceStream' => function($query) {
                        $query->select('id', 'al_result_id', 'economics', 'accounting', 'business_studies', 'information_technology', 'english');
                    }])->with(['scienceStream' => function($query) {
                        $query->select('id', 'al_result_id', 'biology', 'physics', 'chemistry', 'agricultural_science', 'english');
                    }])->with(['mathStream' => function($query) {
                        $query->select('id', 'al_result_id', 'combined_mathematics', 'physics', 'chemistry', 'information_technology', 'english');
                    }])->with(['artStream' => function($query) {
                        $query->select('id','al_result_id', 'tamil', 'hindu_culture', 'economics', 'politic', 'geographic', 'english', 'remark');
                    }]);
            }])->where('id', $id)->first();

        return response()->json([
            'status' => 200,
            "student" => $student,
        ], 200);
    }

    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id) {
        $student = Student::findOrFail($id);

         $student->update([
            'title' => $request->title,
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'course_id' => $request->courseName,
            'certification_name' => $request->nameCertification,
            'date_of_birth' => $request->dateOfBirth,
            'gender' => $request->gender,
            'nic_or_passport_no' => $request->nicPassportNo,
            'nationality' => $request->nationality,
            'tell_phone_personal' => $request->personalNum,
            'tell_phone_home' => $request->homeNum,
            'tell_phone_office' => $request->officeNum,
            'address' => $request->address,
            'email' => $request->email,
            'work_exp' => $request->workExpe,
            'other_quali' => $request->otherQuali,

        ]);

        $ol = $request->checkedOl;

        if ( $ol === true) {
                $olResult = OlResult::findOrFail($request->olId);
                $olResult->update([
                    'math' => $request->olMath,
                    'science' => $request->olScience,
                    'english' => $request->olEnglish,
                    'remark' => $request->olRemark,
                    'year_of_examination' => $request->ol_year_examination,
                    'index_no' => $request->ol_index_no
                ]);
            }
           
    

        $al = $request->checkedAl;
        if ( $al === true) {
            $alResult = AlResult::findOrFail($request->alId);

            $al_result = $alResult->update([
                'stream_type_id' => $request->stream_type,
                'year_of_examination' => $request->al_year_examination,
                'index_no' => $request->al_index_no
            ]);

            if ($request->stream_type == 1) {
                $scienceStream = ScienceStream::findOrFail($request->scieId);

                $scienceStream->update([
                    'biology' => $request->sciebiology,
                    'physics' => $request->sciephysics,
                    'chemistry' => $request->sciechemistry,
                    'agricultural_science' => $request->agriculturalScience,
                    'english' => $request->scieenglish
                ]);
            }


            if ($request->stream_type == 2) {
                $mathStream = MathStream::findOrFail($request->mathId);

                $mathStream->update([
                    'combined_mathematics' => $request->combined_mathematics,
                    'physics' => $request->mathphysics,
                    'chemistry' => $request->mathchemistry,
                    'information_technology' => $request->mathict,
                    'english' => $request->mathenglish
                ]);
                ;
            }

            if ($request->stream_type == 3) {
                $commerceStream = CommerceStream::findOrFail($request->comId);

                $commerceStream->update([
                    'economics' => $request->economics,
                    'accounting' => $request->accounting,
                    'business_studies' => $request->business_studies,
                    'information_technology' => $request->comict,
                    'english' => $request->comenglish
                ]);
            }

            if ($request->stream_type == 4) {
                $artStream = ArtStream::findOrFail($request->artId);

                $artStream->update([
                    'tamil' => $request->tamil,
                    'hindu_culture' => $request->hinduCulture,
                    'economics' => $request->artEconomics,
                    'politic' => $request->politic,
                    'geographic' => $request->geographic,
                    'english' => $request->artEnglish,
                    'remark' => $request->artRemark
                ]);
            }
        }

        return response()->json([
            'status' => 200,
            'message' => "Registered Updated",
        ], 200);
    }

    public function destroy($id) {
        try {
            $student = Student::findOrFail($id);

            $student->delete();
            return response()->json([
                'status' => 200,
                "message" => "student deleted",
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'errors' => $e
            ], 500);
        }
    }


    public function addStudent() {
        return view('student.add-student');
    }

    public function storeStudent(Request $request) {
        $student = new Student();
        $student->title = $request->input('title');
        $student->first_name = $request->input('firstName');
        $student->last_name = $request->input('lastName');
        $student->course_id = $request->input('courseName');
        $student->certification_name = $request->input('nameCertification');
        $student->date_of_birth = $request->input('dateOfBirth');
        $student->gender = $request->input('gender');
        $student->nic_or_passport_no = $request->input('nicPassportNo');
        $student->nationality = $request->input('nationality');
        $student->tell_phone_personal = $request->input('personalNum');
        $student->tell_phone_home = $request->input('homeNum');
        $student->tell_phone_office = $request->input('officeNum');
        $student->address = $request->input('address');
        $student->email = $request->input('emailAddress');

        $student->save();

        $ol = $request->input('ol');
        if ( !is_null($ol)) {
            $ol_result = new OlResult();
            $ol_result->student_id = $student->id;
            $ol_result->math = $request->input('olMath');
            $ol_result->science = $request->input('olScience');
            $ol_result->english = $request->input('olMath');
            $ol_result->english = $request->input('olEnglish');
            $ol_result->remark = $request->input('olRemark');
            $ol_result->year_of_examination = $request->input('ol_year_examination');
            $ol_result->index_no = $request->input('ol_index_no');

            $ol_result->save();
        }

        $al = $request->input('al');
        if ( !is_null($al)) {
            $sci =  $request->input('s_al_year_examination');
            $math =  $request->input('m_al_year_examination');
            $com =  $request->input('c_al_year_examination');
            $art =  $request->input('a_al_year_examination');

            $sciIn =  $request->input('s_al_index_no');
            $mathIn =  $request->input('m_al_index_no');
            $comIn =  $request->input('c_al_index_no');
            $artIn =  $request->input('a_al_index_no');

            $al_result = new AlResult();
            $al_result->student_id = $student->id;
            $al_result->stream_type_id = $request->input('stream_type');
            $al_result->year_of_examination = $this->alYear($sci, $math, $com, $art);
            $al_result->index_no = $this->alIndex($sciIn, $mathIn, $comIn, $artIn);

            $al_result->save();

            if ($request->input('stream_type') == 1) {
                $science = new ScienceStream();
                $science->al_result_id = $al_result->id;
                $science->biology = $request->input('biology');
                $science->physics = $request->input('sciePhysics');
                $science->chemistry = $request->input('scieChemistry');
                $science->agricultural_science = $request->input('agriculturalScience');
                $science->english = $request->input('scieEnglish');

                $science->save();
            }


            if ($request->input('stream_type') == 2) {
                $math = new MathStream();
                $math->al_result_id = $al_result->id;
                $math->combined_mathematics = $request->input('combinedMathematics');
                $math->physics = $request->input('mathPhysics');
                $math->chemistry = $request->input('mathChemistry');
                $math->information_technology = $request->input('comIct');
                $math->english = $request->input('comEnglish');

                $math->save();
            }

            if ($request->input('stream_type') == 3) {
                $commerce = new CommerceStream();
                $commerce->al_result_id = $al_result->id;
                $commerce->economics = $request->input('economics');
                $commerce->accounting = $request->input('accounting');
                $commerce->business_studies = $request->input('businessStudies');
                $commerce->information_technology = $request->input('comIct');
                $commerce->english = $request->input('comEnglish');

                $commerce->save();
            }

            if ($request->input('stream_type') == 4) {
                $arts = new ArtStream();
                $arts->al_result_id = $al_result->id;
                $arts->tamil = $request->input('tamil');
                $arts->hindu_culture = $request->input('hindu_culture');
                $arts->economics = $request->input('artEconomics');
                $arts->politic = $request->input('politic');
                $arts->geographic = $request->input('geographic');
                $arts->english = $request->input('artEnglish');
                $arts->remark = $request->input('artRemark');

                $arts->save();
            }
        }

        return redirect('/student-registration-succeeded')->with('success', $student->first_name . " " . $student->last_name.".");
    }

    private function alYear($sci, $math, $com, $ar) {
        if ($sci !== null) {
            $year = $sci;
        }else if ($math !== null) {
            $year = $math;
        }else if ($com !== null) {
            $year = $com;

        }else{
            $year = $ar;
        }

        return $year;
    }

    private function alIndex($sci, $math, $com, $ar) {
        if ($sci !== null) {
            $year = $sci;
        }else if ($math !== null) {
            $year = $math;
        }else if ($com !== null) {
            $year = $com;

        }else{
            $year = $ar;
        }

        return $year;
    }
}
