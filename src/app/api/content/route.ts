
import { getContent } from '@/server/controllers/content-controller';
import { updateUserContent } from '@/server/services/contentService';
import { IProject } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const content: IProject = await getContent();
    if (!content) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const request = await req.json();
  
  if (!request.value || !request.label) {
    return NextResponse.json({ error: 'No data found' }, { status: 400 });
  }

  try {
    const data = await updateUserContent(request);
    if (!data) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ ...data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// export async function POST(req: NextRequest) {
//   const { email, password } = await req.json();

//   try {
//     const emailExists = await checkEmailExists(email);
//     if (emailExists) {
//       return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
//     }

//     await registerUser(email, password);

//     return NextResponse.json({ message: 'User registered successfully' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }



// export async function PATCH(req: NextRequest) {
//   const { email, password } = await req.json();

//   if (!email) {
//     return NextResponse.json({ error: 'Email is required' }, { status: 400 });
//   }

//   try {
//     const emailExists = await checkEmailExists(email);
//     if (!emailExists) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     await updateUserByEmail(email, { password });

//     return NextResponse.json({ message: 'User updated successfully' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }

// export async function DELETE(req: NextRequest) {
//   const { email } = await req.json();

//   if (!email) {
//     return NextResponse.json({ error: 'Email is required' }, { status: 400 });
//   }

//   try {
//     const emailExists = await checkEmailExists(email);
//     if (!emailExists) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     await deleteUserByEmail(email);

//     return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }
