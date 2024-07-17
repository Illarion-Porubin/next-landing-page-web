

import { getProject, updateProject, addPicture, deletePhotoAtIndex, updateText, updateUser } from '@/server/services/project-service';
import { IProject } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

///content

export async function GET() {
  try {
    const content: IProject = await getProject();
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
  switch (request.action) {
    case 'updatePhoto':
      try {
        const data = await updateProject(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    case 'deletePhoto':
      try {
        const data = await deletePhotoAtIndex(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    case 'updateText':
      try {
        const data = await updateText(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    case 'updateUser':
      try {
        const data = await updateUser(request);
        if (!data) {
          return NextResponse.json({ error: 'Content not found' }, { status: 404 });
        }
        return NextResponse.json({ ...data });
      } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }

    default:
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  }

}

export async function POST(req: NextRequest) {
  const request = await req.json();
  try {
    const data = await addPicture(request);
    if (!data) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    return NextResponse.json({ ...data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

///content///

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
